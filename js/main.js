/* ==========================================================================
   CHÂTEAU BELLANDA — SCRIPTS D'INTERACTIVITÉ ACCESSIBLES
   Gestion des formulaires de réservation et retour visuel instantané
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('.js-reservation-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const feedbackBox = form.querySelector('.js-form-feedback');
      if (feedbackBox) {
        feedbackBox.hidden = false;
        feedbackBox.textContent = 'Votre requête d’immersion au Château Bellanda a bien été enregistrée. Notre conciergerie vous contactera sous 2 heures.';
        feedbackBox.focus();
      }
      form.reset();
    });
  });
});
