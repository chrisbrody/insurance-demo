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

            // Step 3: Security Employees
            $('#emp2-name').val('John Smith');
            $('#emp2-email').val('john.smith@reliablelife.com');
            $('#emp3-name').val('Lisa Brown');
            $('#emp3-email').val('lisa.brown@reliablelife.com');

            // Step 4: Department Contact Info
            $('#dept-email').val('claims@reliablelife.com');
            $('#dept-address').val('456 Insurance Plaza\nSuite 200\nChicago, IL 60601');
            $('#dept-phone').val('(555) 987-6543 (Press 1, then 2, then 3 for expedited service)');
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
    // Mark previous steps as completed
    $('.progress-step[data-step]').each(function() {
        var stepNum = parseInt($(this).data('step'));
        if (stepNum < stepNumber) {
            $(this).addClass('completed').removeClass('active');
        } else if (stepNum === stepNumber) {
            $(this).addClass('active').removeClass('completed');
        } else {
            $(this).removeClass('active completed');
        }
    });
    
    $('.setup-step').removeClass('active');
    $('#step-' + stepNumber).addClass('active');
}

function prevStep(stepNumber) {
    // Mark steps appropriately when going back
    $('.progress-step[data-step]').each(function() {
        var stepNum = parseInt($(this).data('step'));
        if (stepNum < stepNumber) {
            $(this).addClass('completed').removeClass('active');
        } else if (stepNum === stepNumber) {
            $(this).addClass('active').removeClass('completed');
        } else {
            $(this).removeClass('active completed');
        }
    });
    
    $('.setup-step').removeClass('active');
    $('#step-' + stepNumber).addClass('active');
}

function completeSetup() {
    alert('Setup complete! Your member account has been created successfully.');
    window.location.href = 'member-profile.html';
}

// Product selection and details functionality for new member setup
$(document).ready(function() {
    // Product selection handling for new member setup - clickable boxes
    $('.selectable-product-setup').click(function() {
        $(this).toggleClass('selected');
        updateProductDetails();
    });
    
    // Custom product addition functionality
    $('#add-custom-product-setup').click(function() {
        var customProduct = $('#custom-product-input-setup').val().trim();
        if (customProduct) {
            // Find the best row to add to (try to fill incomplete rows first)
            var lastProductRow = $('.products-grid-setup .row').not(':last');
            var targetRow = null;
            
            // Check if any row has less than 4 products
            lastProductRow.each(function() {
                if ($(this).find('.col-md-3').length < 4) {
                    targetRow = $(this);
                    return false; // Break loop
                }
            });
            
            // If no incomplete row found, create new row before custom input row
            if (!targetRow) {
                targetRow = $('<div class="row mb-3"></div>');
                $('.products-grid-setup .row:last').before(targetRow);
            }
            
            // Create the new product box with proper styling
            var customProductBox = $('<div class="col-md-3 mb-2"><div class="product-box-setup selectable-product-setup selected" data-product="' + customProduct.toUpperCase() + '">' + customProduct.toUpperCase() + '</div></div>');
            
            // Add click handler to the new custom product
            customProductBox.find('.selectable-product-setup').click(function() {
                $(this).toggleClass('selected');
                updateProductDetails();
            });
            
            // Add to the target row
            targetRow.append(customProductBox);
            
            // Clear the input
            $('#custom-product-input-setup').val('');
            
            // Update product details to include the new custom product
            updateProductDetails();
        }
    });
    
    // Allow Enter key to add custom product
    $('#custom-product-input-setup').keypress(function(e) {
        if (e.which == 13) {
            $('#add-custom-product-setup').click();
        }
    });
    
    function updateProductDetails() {
        var selectedProducts = [];
        $('.selectable-product-setup.selected').each(function() {
            selectedProducts.push($(this).data('product'));
        });
        
        var productDetailsSection = $('#product-details-section');
        var productDetailsContainer = $('#selected-products-details');
        
        if (selectedProducts.length > 0) {
            productDetailsSection.show();
            productDetailsContainer.empty();
            
            selectedProducts.forEach(function(product) {
                var productDetails = generateProductDetailsForm(product);
                productDetailsContainer.append(productDetails);
            });
        } else {
            productDetailsSection.hide();
        }
    }
    
    function generateProductDetailsForm(productName) {
        // Pre-populated demo data for each specific product type
        var sampleData = {
            'LIFE': {
                email: 'life.claims@reliablelife.com',
                address: '456 Insurance Plaza\nLife Insurance Dept\nSuite 200\nChicago, IL 60601',
                phone: '800-555-5555 (Hit option 3, then option 1, then option 2)'
            },
            'HEALTH': {
                email: 'health.services@reliablelife.com', 
                address: '456 Insurance Plaza\nHealth Insurance Dept\nSuite 300\nChicago, IL 60601',
                phone: '800-555-9999 (Hit option 1, option 1, then option 3)'
            },
            'DISABILITY': {
                email: 'disability.support@reliablelife.com',
                address: '456 Insurance Plaza\nDisability Claims Dept\nSuite 400\nChicago, IL 60601', 
                phone: '800-555-8888 (Hit option 5, then option 1, then option 1)'
            },
            'AUTOMOBILE': {
                email: 'auto.claims@reliablelife.com',
                address: '456 Insurance Plaza\nAuto Insurance Dept\nSuite 100\nChicago, IL 60601',
                phone: '800-555-4444 (Hit option 2, then option 4, then option 1)'
            },
            'ANNUITY': {
                email: 'annuity.services@reliablelife.com',
                address: '456 Insurance Plaza\nAnnuity Department\nSuite 150\nChicago, IL 60601',
                phone: '800-555-7777 (Hit option 1, then option 3, then option 2)'
            },
            'CANCER': {
                email: 'cancer.benefits@reliablelife.com',
                address: '456 Insurance Plaza\nCancer Insurance Dept\nSuite 250\nChicago, IL 60601',
                phone: '800-555-6666 (Hit option 4, then option 2, then option 1)'
            },
            'CRITICAL ILLNESS': {
                email: 'critical.claims@reliablelife.com',
                address: '456 Insurance Plaza\nCritical Illness Dept\nSuite 350\nChicago, IL 60601',
                phone: '800-555-3333 (Hit option 6, then option 1, then option 3)'
            },
            'HOME OWNERS': {
                email: 'homeowners.claims@reliablelife.com',
                address: '456 Insurance Plaza\nProperty Insurance Dept\nSuite 450\nChicago, IL 60601',
                phone: '800-555-2222 (Hit option 7, then option 2, then option 1)'
            }
        };
        
        var data = sampleData[productName] || {
            email: productName.toLowerCase().replace(/\s+/g, '') + '@reliablelife.com',
            address: '456 Insurance Plaza\n' + productName + ' Department\nChicago, IL 60601', 
            phone: '800-555-1111 (Contact for ' + productName + ' services)'
        };
        
        return `
            <div class="product-detail-form border rounded p-4 mb-4 bg-light">
                <h4 class="text-primary mb-3">${productName} Department Contact Details</h4>
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <label for="${productName.toLowerCase().replace(/\s+/g, '-')}-email" class="form-label"><strong>Department Email Address:</strong></label>
                        <input type="email" id="${productName.toLowerCase().replace(/\s+/g, '-')}-email" class="form-control" value="${data.email}">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="${productName.toLowerCase().replace(/\s+/g, '-')}-address" class="form-label"><strong>Department Mailing Address:</strong></label>
                        <textarea id="${productName.toLowerCase().replace(/\s+/g, '-')}-address" class="form-control" rows="3">${data.address}</textarea>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="${productName.toLowerCase().replace(/\s+/g, '-')}-phone" class="form-label"><strong>Department Phone & Prompts:</strong></label>
                        <input type="tel" id="${productName.toLowerCase().replace(/\s+/g, '-')}-phone" class="form-control" value="${data.phone}">
                        <small class="form-text text-muted">Include prompts to shorten wait times</small>
                    </div>
                </div>
            </div>
        `;
    }
});