/**
 * VanChuyển Pro – Shared App JS
 * Handles sidebar toggle for responsive layout
 */
(function () {
  const toggle  = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (!toggle || !sidebar || !overlay) return;

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener('click', closeSidebar);

  // Close sidebar when a nav-item is clicked (on mobile)
  sidebar.querySelectorAll('.nav-item').forEach(function (item) {
    item.addEventListener('click', function () {
      if (window.innerWidth <= 1024) closeSidebar();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
  });

  // Auto-close if window is resized beyond tablet breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) closeSidebar();
  });
})();
