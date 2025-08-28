$(document).ready(function() {
    
    // Alert functionality for "What is..." buttons
    $('.what-is-btn').click(function() {
        var type = $(this).data('type');
        var messages = {
            'term': 'Term life insurance provides coverage for a specific period (term) and is generally the most affordable option.',
            'whole': 'Whole life insurance provides lifelong coverage with a cash value component that grows over time.',
            'universal': 'Universal life insurance offers flexible premiums and death benefits with a cash value component.',
            'variable': 'Variable life insurance allows you to invest the cash value in various investment options.'
        };
        
        if (messages[type]) {
            alert(messages[type]);
        }
    });

    // Search functionality for main page
    $('#carrier-search-btn').click(function() {
        var searchTerm = $('#carrier-search').val().toLowerCase();
        if (searchTerm === 'acme' || searchTerm === 'acme corporation') {
            $('.search-results').html('<div class="result-item"><h4><a href="carrier-details.html">ACME Corporation</a></h4><p>Leading insurance provider offering comprehensive coverage solutions.</p></div>');
        } else if (searchTerm === '') {
            alert('Please enter a carrier name to search.');
        } else {
            $('.search-results').html('<div class="result-item"><p>No results found for "' + searchTerm + '". Try searching for "ACME".</p></div>');
        }
    });

    $('#product-search-btn').click(function() {
        var searchTerm = $('#product-search').val().toLowerCase();
        if (searchTerm.includes('life') || searchTerm.includes('insurance')) {
            $('.search-results').html('<div class="result-item"><h4><a href="life-insurance-types.html">Life Insurance Products</a></h4><p>Comprehensive life insurance options including term, whole, universal, and variable life.</p></div>');
        } else if (searchTerm === '') {
            alert('Please enter a product name to search.');
        } else {
            $('.search-results').html('<div class="result-item"><p>No results found for "' + searchTerm + '". Try searching for "life insurance".</p></div>');
        }
    });

    // Pre-fill ACME in carrier search and show results
    if ($('#carrier-search').length) {
        $('#carrier-search').val('ACME');
        $('.search-results').html('<div class="result-item"><h4><a href="carrier-details.html">ACME Corporation</a></h4><p>Leading insurance provider offering comprehensive coverage solutions.</p><div class="pagination"><span>Page 1 of 1</span></div></div>');
    }

    // Pre-fill all forms with demo data
    function prefillForms() {
        // Become a Member form - FOR INSURANCE CARRIERS
        if ($('.membership-form').length) {
            $('#company-name').val('Reliable Life Insurance Company');
            $('#contact-person').val('Sarah Johnson');
            $('#job-title').val('Business Development Director');
            $('#company-email').val('sarah.johnson@reliablelife.com');
            $('#company-phone').val('(555) 987-6543');
            $('#company-address').val('456 Insurance Plaza\nSuite 200\nChicago, IL 60601');
            $('#industry').val('finance');
            $('#employees').val('101-500');
            $('input[name="interest"][value="life"]').prop('checked', true);
            $('input[name="interest"][value="health"]').prop('checked', true);
            $('#additional-info').val('We are a mid-sized insurance carrier looking to expand our market presence through your platform. We offer competitive life insurance products and want to connect with more distribution partners.');
        }

        // New Member Setup forms - FOR INSURANCE CARRIERS
        if ($('#step-1').length) {
            // Step 1: Login Creation (carrier company admin)
            $('#username').val('reliablelife_admin');
            $('#email').val('admin@reliablelife.com');
            $('#password').val('CarrierPass123!');
            $('#confirm-password').val('CarrierPass123!');
            $('#security-question').val('pet');
            $('#security-answer').val('Liberty');

            // Step 2: Banking Information (carrier company banking)
            $('#bank-name').val('Business National Bank');
            $('#routing-number').val('987654321');
            $('#account-number').val('1234567890');
            $('#account-type').val('checking');
            $('#account-holder').val('Reliable Life Insurance Company');

            // Step 3: Company Contact Details (not employee - this is carrier admin contact)
            $('#emp-id').val('CARRIER001');
            $('#first-name').val('Sarah');
            $('#last-name').val('Johnson');
            $('#date-of-birth').val('1980-03-22');
            $('#ssn').val('987-65-4321');
            $('#department').val('Business Development');
            $('#hire-date').val('2015-08-10');
            $('#salary').val('95000');

            // Step 4: Product Selection (insurance products the CARRIER offers)
            $('#life-insurance').prop('checked', true);
            $('#health-insurance').prop('checked', true);
            $('#coverage-amount').val('1000000'); // Higher amounts for carrier business
            $('#beneficiary').val('Michael Johnson');
            $('#beneficiary-relationship').val('spouse');
        }

        // Custom product field for carriers
        if ($('#custom-product').length) {
            $('#custom-product').attr('placeholder', 'Example: We also offer specialized cyber liability insurance for technology companies, international travel insurance for executives, and directors & officers coverage...');
        }
    }

    // Call prefill function
    prefillForms();

    // Form validation for membership requests
    $('.membership-form').submit(function(e) {
        e.preventDefault();
        var requiredFields = $(this).find('input[required], textarea[required], select[required]');
        var isValid = true;
        
        requiredFields.each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).css('border-color', '#dc3545');
            } else {
                $(this).css('border-color', '#ced4da');
            }
        });
        
        if (isValid) {
            // Show Bootstrap modal instead of alert
            $('#membershipModal').modal('show');
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Product card interactions in member profile
    $('.product-card').click(function() {
        var checkbox = $(this).find('input[type="checkbox"]');
        checkbox.prop('checked', !checkbox.prop('checked'));
    });

    // Prevent checkbox click from bubbling up
    $('.product-card input[type="checkbox"]').click(function(e) {
        e.stopPropagation();
    });

    // Save product selections
    $('.save-products-btn').click(function() {
        var selectedProducts = [];
        $('.product-card input[type="checkbox"]:checked').each(function() {
            selectedProducts.push($(this).val());
        });
        
        if (selectedProducts.length > 0) {
            alert('Product offerings saved: ' + selectedProducts.join(', ') + '. These products are now available for customers to find through our platform.');
        } else {
            alert('Please select at least one product your carrier offers.');
        }
    });

    // Get quotes functionality
    $('.get-quotes-btn').click(function() {
        var selectedProducts = [];
        $('.product-card input[type="checkbox"]:checked').each(function() {
            selectedProducts.push($(this).val());
        });
        
        if (selectedProducts.length > 0) {
            alert('Platform listings updated for: ' + selectedProducts.join(', ') + '. Your products are now live and searchable by customers.');
        } else {
            alert('Please select products to list on the platform.');
        }
    });

    // Custom product request
    $('.request-btn').click(function() {
        var customRequest = $('#custom-product').val();
        if (customRequest.trim() !== '') {
            alert('Custom product added: "' + customRequest + '". This product is now part of your carrier profile and searchable by customers.');
            $('#custom-product').val('');
        } else {
            alert('Please describe the additional insurance product your carrier offers.');
        }
    });

    // Company info update
    $('.company-info-form').submit(function(e) {
        e.preventDefault();
        alert('Carrier information updated successfully!');
    });

    // Account management buttons
    $('.action-btn').click(function() {
        var action = $(this).text();
        alert(action + ' functionality would be available in the full application.');
    });

    // Insurance type box clicks
    $('.insurance-type-box.clickable-box').click(function() {
        var type = $(this).find('h4').text().toLowerCase();
        if (type.includes('term')) {
            window.location.href = 'term-life-contact.html';
        } else if (type.includes('whole')) {
            window.location.href = 'permanent-life-contact.html';
        } 
    });

    // Download link clicks
    $('.download-link').click(function(e) {
        e.preventDefault();
        var linkText = $(this).text();
        alert('Downloading ' + linkText + '... (This is a demo - no actual download)');
    });

    // Initialize first step as active on new member setup page
    if ($('#step-1').length) {
        $('#step-1').addClass('active');
        $('.progress-step[data-step="1"]').addClass('active');
    }

    // Form field focus effects
    $('input, textarea, select').focus(function() {
        $(this).parent().addClass('focused');
    }).blur(function() {
        $(this).parent().removeClass('focused');
    });

    // Password confirmation validation
    $('#confirm-password').blur(function() {
        var password = $('#password').val();
        var confirmPassword = $(this).val();
        
        if (password !== '' && confirmPassword !== '' && password !== confirmPassword) {
            $(this).css('border-color', '#dc3545');
            if (!$(this).siblings('.error-message').length) {
                $(this).after('<small class="error-message" style="color: #dc3545;">Passwords do not match</small>');
            }
        } else {
            $(this).css('border-color', '#ced4da');
            $(this).siblings('.error-message').remove();
        }
    });

    // Email validation
    $('input[type="email"]').blur(function() {
        var email = $(this).val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email !== '' && !emailRegex.test(email)) {
            $(this).css('border-color', '#dc3545');
            if (!$(this).siblings('.error-message').length) {
                $(this).after('<small class="error-message" style="color: #dc3545;">Please enter a valid email address</small>');
            }
        } else {
            $(this).css('border-color', '#ced4da');
            $(this).siblings('.error-message').remove();
        }
    });

    // Phone number formatting
    $('input[type="tel"]').on('input', function() {
        var x = $(this).val().replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        $(this).val(!x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : ''));
    });

    // SSN formatting
    $('#ssn').on('input', function() {
        var x = $(this).val().replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,4})/);
        $(this).val(!x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : ''));
    });
    
});

// Global functions for multi-step navigation
function nextStep(stepNumber) {
    $('.setup-step').removeClass('active');
    $('.progress-step').removeClass('active');
    $('#step-' + stepNumber).addClass('active');
    $('.progress-step[data-step="' + stepNumber + '"]').addClass('active');
}

function prevStep(stepNumber) {
    $('.setup-step').removeClass('active');
    $('.progress-step').removeClass('active');
    $('#step-' + stepNumber).addClass('active');
    $('.progress-step[data-step="' + stepNumber + '"]').addClass('active');
}

function completeSetup() {
    alert('Setup complete! Your member account has been created successfully.');
    window.location.href = 'member-profile.html';
}