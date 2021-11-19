let uniteconomicsform = document.getElementById('unit-economics-form'),
    sellingPriceInput  = document.getElementById('selling-price'),
    cogsInput = document.getElementById('cogs'),     
    groossMarginInput = document.getElementById('grooss-margin'),
    SalesMarketingInput = document.getElementById('Sales-marketing'),
    operationCostInput = document.getElementById('operation-cost'),
    netMarginInput = document.getElementById('net-margin'),          
    sellingPriceValue , cogsValue , groossMarginValue,
    SalesMarketingValue , operationCostValue , netMarginValue;
function calculate(event){
    event.preventDefault();
        //calculate groos margin
    sellingPriceValue = sellingPriceInput.value;
    cogsValue = cogsInput.value;
    groossMarginValue = sellingPriceValue - cogsValue;
    groossMarginInput.value = groossMarginValue;
    
    //calculate net margin
    SalesMarketingValue = SalesMarketingInput.value;
    operationCostValue = operationCostInput.value;
    netMarginValue = groossMarginValue - SalesMarketingValue -
    operationCostValue;
    netMarginInput.value = netMarginValue;
}

uniteconomicsform.addEventListener('submit',calculate);
