const pesquisar = document.getElementById('search');
pesquisar.addEventListener('input', (event)=>{
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.items .item')
    const noResults= document.getElementById('no_results');

    let hasResults = false;

    if(value != ''){

        items.forEach(item =>{
    
            // para pesquisar somento por titulo
    
            // const itemTitle = item.querySelector('.item-title').textContent;
            // if(formatString(itemTitle).indexOf(value)!== -1){
            
                
            //pesquisar por titulo e descrição
    
            // const itemDescription = item.querySelector('.item-description').textContent;
    
            // if(formatString(itemTitle).indexOf(value)!== -1 
            // || formatString(itemDescription).indexOf(value)!== -1 ){
    
    
            if(formatString(item.textContent).indexOf(value)!== -1){
    
                item.style.display = 'flex';
                hasResults = true;
    
            } else{
                item.style.display = 'none';
                
            }
    
        })
    
        if (hasResults){
            noResults.style.display =  'none';
        }else{
            noResults.style.display = 'block'
        }
    } else{
        items.forEach(item => item.style.display = 'flex');

        noResults.style.display = 'none';
    }

});

function formatString(value) {
    return value
    .toLowerCase()
    .trim()
    // para tirar os espaços e identicar maiusculo/minusculo
}