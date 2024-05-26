initializeFormValidation(null, [1, 7, 8, 33]);

// Form submission button click handler
if (document.querySelectorAll('.form-btn').length) {
        document.querySelectorAll('.form-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            // Find the parent form of the submit button
            var form = this.closest('form');
            // Call the validation function for this form
            console.log('FormData:', initializeFormValidation(form, [1, 7, 8, 33]));
        });
    });
}
