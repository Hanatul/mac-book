
// get Total price
function getTotalPrice() {
    const basePrice = parseFloat(document.getElementById('base-price').innerText)
    const extraMemoryPrice = parseFloat(document.getElementById('memory').innerText)
    const extraStoragePrice = parseFloat(document.getElementById('storage').innerText)
    const extraDeliveryPrice = parseFloat(document.getElementById('delivery').innerText)

    const total = basePrice + extraMemoryPrice + extraStoragePrice + extraDeliveryPrice;

    document.getElementById('total-price').innerText = total
    document.getElementById('total-price-footer').innerText = total
}

// promo code section 
document.getElementById('promo-button').addEventListener('click', function () {
    const totalPriceAmount = parseFloat(document.getElementById('total-price').innerText)
    const totalPromoPrice = document.getElementById('total-price-footer')
    const promoInputField = document.getElementById('promo-input')
    const userPromo = promoInputField.value

    if (userPromo == 'stevekaku') {
        const discountPromoPrice = (totalPriceAmount * 20) / 100
        const updatePrice = totalPriceAmount - discountPromoPrice
        totalPromoPrice.innerText = updatePrice
    }
    promoInputField.value = ''
})


// update memory cost function
function updateMemoryCost(extraPayForMemory) {
    if (extraPayForMemory == true) {
        document.getElementById('memory').innerText = '180'
    } else {
        document.getElementById('memory').innerText = '0'
    }
    getTotalPrice()
}

// handle memory cost
document.getElementById('8GB-Memory').addEventListener('click', function () {
    updateMemoryCost(false)
})
document.getElementById('16GB-Memory').addEventListener('click', function () {
    updateMemoryCost(true)
})


// update storage cost function 
function updateStorageCost(extraPayForStorage, storageId) {
    if (extraPayForStorage == false) {
        document.getElementById('storage').innerText = '0'
    } else {
        if (extraPayForStorage == true && storageId == '512GB-SSD') {
            document.getElementById('storage').innerText = '100'
        } else if (extraPayForStorage == true && storageId == '1TB-SSD') {
            document.getElementById('storage').innerText = '180'
        }
    }
    getTotalPrice()
}


// handle memory cost 
document.getElementById('256GB-SSD').addEventListener('click', function () {
    updateStorageCost(false, 0)
})
document.getElementById('512GB-SSD').addEventListener('click', function () {
    updateStorageCost(true, '512GB-SSD')
})
document.getElementById('1TB-SSD').addEventListener('click', function () {
    updateStorageCost(true, '1TB-SSD')
})

// update delivery cost 
function updateDeliveryCost(extraPayForDelivery) {
    if (extraPayForDelivery == true) {
        document.getElementById('delivery').innerText = '20'
    } else {
        document.getElementById('delivery').innerText = '0'
    }
    getTotalPrice()
}

// handle delivery cost 
document.getElementById('first-delivery-option').addEventListener('click', function () {
    updateDeliveryCost(false)
})
document.getElementById('second-delivery-option').addEventListener('click', function () {
    updateDeliveryCost(true)
})