// Member profile product selection functionality
var selectedProducts = [];

$(document).ready(function() {
    
    // Handle product box clicks
    $(document).on('click', '.selectable-product', function() {
        var productName = $(this).data('product');
        
        // Handle Life product - keep original functionality
        if ($(this).data('special') === 'life') {
            window.location.href = 'life-insurance-split.html';
            return;
        }
        
        // Toggle selection
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected').css({
                'background-color': '#fff', 
                'border-color': '#333', 
                'color': '#333'
            });
            selectedProducts = selectedProducts.filter(p => p !== productName);
        } else {
            $(this).addClass('selected').css({
                'background-color': '#d4edda', 
                'border-color': '#28a745', 
                'color': '#155724'
            });
            selectedProducts.push(productName);
        }
        
        updateProductsList();
    });
    
    // Add custom product
    $('#add-custom-product').click(function() {
        var customProduct = $('#custom-product-input').val().trim().toUpperCase();
        if (customProduct && !selectedProducts.includes(customProduct)) {
            selectedProducts.push(customProduct);
            $('#custom-product-input').val('');
            updateProductsList();
        }
    });
    
    // Enter key to add custom product
    $('#custom-product-input').keypress(function(e) {
        if (e.which === 13) {
            $('#add-custom-product').click();
        }
    });
    
});

function updateProductsList() {
    var container = $('#selected-products-container');
    var listDiv = $('#selected-products-list');
    
    if (selectedProducts.length === 0) {
        listDiv.hide();
        return;
    }
    
    // Sort A-Z
    var sorted = selectedProducts.slice().sort();
    container.empty();
    
    sorted.forEach(function(product) {
        var badge = $('<span style="background:#28a745;color:white;padding:5px 10px;border-radius:15px;margin:2px;display:inline-block;">' + 
                     product + ' <button onclick="removeProduct(\'' + product + '\')" style="background:none;border:none;color:white;margin-left:8px;cursor:pointer;">×</button></span>');
        container.append(badge);
    });
    
    listDiv.show();
}

function removeProduct(productName) {
    selectedProducts = selectedProducts.filter(p => p !== productName);
    $('.selectable-product[data-product="' + productName + '"]').removeClass('selected').css({
        'background-color': '#fff', 
        'border-color': '#333', 
        'color': '#333'
    });
    updateProductsList();
}