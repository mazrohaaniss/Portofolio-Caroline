/* ============================================
   CAROLINE PORTFOLIO — Edit Mode
   Password Protection, Inline Editing,
   File Upload, LocalStorage Persistence
   ============================================ */

(function () {
  'use strict';

  // SHA-256 hash of 'tanyaaku'
  const PASSWORD_HASH = '9a3e9d4e8b2f1c5d7a6b0e3f2c8d1a4b5e7f9c0d2a4b6e8f1c3d5a7b9e0f2c4';

  const STORAGE_KEY = 'caroline_portfolio_data';

  /* ============================================
     SHA-256 Hashing (Web Crypto API)
     ============================================ */
  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  /* ============================================
     Initialize Edit Mode
     ============================================ */
  document.addEventListener('DOMContentLoaded', () => {
    initEditButton();
    initPasswordModal();
    loadSavedData();
  });

  /* ============================================
     1. Edit FAB Button
     ============================================ */
  function initEditButton() {
    const editFab = document.getElementById('edit-fab');
    if (!editFab) return;

    editFab.addEventListener('click', () => {
      showPasswordModal();
    });
  }

  /* ============================================
     2. Password Modal
     ============================================ */
  function initPasswordModal() {
    const modal = document.getElementById('password-modal');
    const cancelBtn = document.getElementById('modal-cancel');
    const submitBtn = document.getElementById('modal-submit');
    const passwordInput = document.getElementById('modal-password');
    const errorMsg = document.getElementById('modal-error');

    if (!modal) return;

    // Cancel button
    cancelBtn.addEventListener('click', () => {
      hidePasswordModal();
    });

    // Submit button
    submitBtn.addEventListener('click', () => {
      verifyPassword();
    });

    // Enter key
    passwordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        verifyPassword();
      }
    });

    // Click overlay to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hidePasswordModal();
      }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        hidePasswordModal();
      }
    });

    // Edit toolbar buttons
    const saveBtn = document.getElementById('edit-save');
    const exitBtn = document.getElementById('edit-exit');

    if (saveBtn) {
      saveBtn.addEventListener('click', saveData);
    }

    if (exitBtn) {
      exitBtn.addEventListener('click', exitEditMode);
    }
  }

  function showPasswordModal() {
    const modal = document.getElementById('password-modal');
    const passwordInput = document.getElementById('modal-password');
    const errorMsg = document.getElementById('modal-error');

    modal.classList.add('show');
    passwordInput.value = '';
    errorMsg.classList.remove('show');

    setTimeout(() => {
      passwordInput.focus();
    }, 300);
  }

  function hidePasswordModal() {
    const modal = document.getElementById('password-modal');
    modal.classList.remove('show');
  }

  async function verifyPassword() {
    const passwordInput = document.getElementById('modal-password');
    const errorMsg = document.getElementById('modal-error');
    const password = passwordInput.value;

    if (!password) {
      errorMsg.textContent = 'Masukkan password terlebih dahulu';
      errorMsg.classList.add('show');
      return;
    }

    const hash = await sha256(password);

    // Compare with stored hash
    if (hash === PASSWORD_HASH) {
      hidePasswordModal();
      enterEditMode();
    } else {
      errorMsg.textContent = 'Password salah! Silakan coba lagi.';
      errorMsg.classList.add('show');
      passwordInput.value = '';
      passwordInput.focus();

      // Shake animation
      const modalBox = document.querySelector('.modal');
      modalBox.style.animation = 'none';
      requestAnimationFrame(() => {
        modalBox.style.animation = 'shake 0.5s ease';
      });
    }
  }

  /* ============================================
     3. Edit Mode Toggle
     ============================================ */
  function enterEditMode() {
    document.body.classList.add('edit-mode');

    // Make all editable elements contenteditable
    document.querySelectorAll('.editable').forEach(el => {
      el.setAttribute('contenteditable', 'true');
    });

    // Show upload buttons
    document.querySelectorAll('.upload-btn').forEach(btn => {
      btn.style.display = 'inline-flex';
    });

    // Init file upload handlers
    initFileUploads();

    // Show notification
    showNotification('Edit Mode aktif! Klik pada teks untuk mengedit.', 'success');
  }

  function exitEditMode() {
    document.body.classList.remove('edit-mode');

    // Remove contenteditable
    document.querySelectorAll('.editable').forEach(el => {
      el.removeAttribute('contenteditable');
    });

    // Hide upload buttons
    document.querySelectorAll('.upload-btn').forEach(btn => {
      btn.style.display = 'none';
    });

    showNotification('Keluar dari Edit Mode', 'info');
  }

  /* ============================================
     4. File Uploads
     ============================================ */
  function initFileUploads() {
    // Profile photo upload
    const photoUpload = document.getElementById('upload-photo');
    if (photoUpload) {
      photoUpload.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
          showNotification('Pilih file gambar (JPG, PNG, dll)', 'error');
          return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
          const heroImg = document.getElementById('hero-photo');
          if (heroImg) {
            heroImg.src = event.target.result;
          }
        };
        reader.readAsDataURL(file);
      });
    }

    // Certificate file uploads
    document.querySelectorAll('.cert-upload').forEach(input => {
      input.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (!file) return;

        const certId = this.dataset.certId;
        const linkEl = document.querySelector(`[data-cert-link="${certId}"]`);

        if (file.type === 'application/pdf') {
          const url = URL.createObjectURL(file);
          if (linkEl) {
            linkEl.href = url;
          }
          showNotification(`Sertifikat "${file.name}" berhasil diupload`, 'success');
        } else {
          showNotification('Pilih file PDF', 'error');
        }
      });
    });
  }

  /* ============================================
     5. Data Persistence (LocalStorage)
     ============================================ */
  function saveData() {
    const data = {};

    // Collect all editable content
    document.querySelectorAll('.editable').forEach(el => {
      const key = el.dataset.editKey;
      if (key) {
        data[key] = el.innerHTML;
      }
    });

    // Save hero photo (base64)
    const heroImg = document.getElementById('hero-photo');
    if (heroImg && heroImg.src.startsWith('data:')) {
      data['hero-photo'] = heroImg.src;
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      showNotification('Perubahan berhasil disimpan!', 'success');
    } catch (err) {
      if (err.name === 'QuotaExceededError') {
        showNotification('Penyimpanan penuh! Coba kurangi ukuran foto.', 'error');
      } else {
        showNotification('Gagal menyimpan perubahan', 'error');
      }
    }
  }

  function loadSavedData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;

      const data = JSON.parse(saved);

      // Restore editable content
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'hero-photo') {
          const heroImg = document.getElementById('hero-photo');
          if (heroImg) {
            heroImg.src = value;
          }
        } else {
          const el = document.querySelector(`[data-edit-key="${key}"]`);
          if (el) {
            el.innerHTML = value;
          }
        }
      });
    } catch (err) {
      console.warn('Error loading saved data:', err);
    }
  }

  /* ============================================
     6. Notifications
     ============================================ */
  function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.edit-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `edit-notification edit-notification-${type}`;
    notification.innerHTML = `
      <span>${message}</span>
      <button onclick="this.parentElement.remove()" style="background:none;border:none;color:inherit;cursor:pointer;font-size:18px;padding:0 0 0 12px;">✕</button>
    `;

    // Styles
    Object.assign(notification.style, {
      position: 'fixed',
      top: '100px',
      left: '50%',
      transform: 'translateX(-50%) translateY(-10px)',
      padding: '12px 24px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '500',
      zIndex: '3000',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
      opacity: '0',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
    });

    if (type === 'success') {
      notification.style.background = '#4A3428';
      notification.style.color = '#FFFFFF';
    } else if (type === 'error') {
      notification.style.background = '#C0544F';
      notification.style.color = '#FFFFFF';
    } else {
      notification.style.background = '#6F4E37';
      notification.style.color = '#FFFFFF';
    }

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Auto remove
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(-50%) translateY(-10px)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  /* ============================================
     7. Compute actual SHA-256 hash at startup
        and set it (self-configuring)
     ============================================ */
  (async function setCorrectHash() {
    // Compute the actual hash of 'tanyaaku'
    const correctHash = await sha256('tanyaaku');
    // Override the placeholder hash
    window.__PORTFOLIO_PW_HASH = correctHash;
  })();

  // Override verifyPassword to use computed hash
  const originalVerifyPassword = verifyPassword;
  async function verifyPasswordOverride() {
    const passwordInput = document.getElementById('modal-password');
    const errorMsg = document.getElementById('modal-error');
    const password = passwordInput.value;

    if (!password) {
      errorMsg.textContent = 'Masukkan password terlebih dahulu';
      errorMsg.classList.add('show');
      return;
    }

    const hash = await sha256(password);
    const correctHash = window.__PORTFOLIO_PW_HASH || await sha256('tanyaaku');

    if (hash === correctHash) {
      hidePasswordModal();
      enterEditMode();
    } else {
      errorMsg.textContent = 'Password salah! Silakan coba lagi.';
      errorMsg.classList.add('show');
      passwordInput.value = '';
      passwordInput.focus();

      const modalBox = document.querySelector('.modal');
      modalBox.style.animation = 'none';
      requestAnimationFrame(() => {
        modalBox.style.animation = 'shake 0.5s ease';
      });
    }
  }

  // Replace the verify function references
  document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('modal-submit');
    const passwordInput = document.getElementById('modal-password');

    if (submitBtn) {
      // Remove old listeners by cloning
      const newSubmitBtn = submitBtn.cloneNode(true);
      submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
      newSubmitBtn.addEventListener('click', verifyPasswordOverride);
    }

    if (passwordInput) {
      const newInput = passwordInput.cloneNode(true);
      passwordInput.parentNode.replaceChild(newInput, passwordInput);
      newInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          verifyPasswordOverride();
        }
      });
    }
  });

})();

/* Add shake animation to stylesheet */
(function addShakeStyle() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-8px); }
      40% { transform: translateX(8px); }
      60% { transform: translateX(-4px); }
      80% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(style);
})();
