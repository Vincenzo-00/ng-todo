const articlesAll = document.querySelectorAll("article");
const buttonAll = document.querySelectorAll("button");
const result = document.querySelectorAll(".result");

function calculateContentLength(type) {
    let elements = document.querySelectorAll("article.visibile h1, article.visibile h2, article.visibile p"); 
    let length = 0;

    switch (type) {
        case "characters":

            for (let i = 0; i < elements.length; i++) {
       
                let contentCha = elements[i].textContent.replace(/[^A-Za-z0-9]/g,"");
                length += contentCha.length;
                
            }

            break;
            
        case "words":

        for (let i = 0; i < elements.length; i++) {
        
            let contentWords = elements[i].textContent;
            length += contentWords.split(" ").length;
            
        }
        
        break;

        case "titles&paragraphs":

        length += elements.length;

    }

    return length;

}

buttonAll[0].onclick=function() {

    contentChaLength = calculateContentLength("characters")
    result[0].innerHTML = contentChaLength;
    
}

buttonAll[1].onclick=function() {
    
    contentWordsLength = calculateContentLength("words");
    result[1].innerHTML = contentWordsLength;
    
}

buttonAll[2].onclick=function() {

    titlesAndParagraphsLength = calculateContentLength("titles&paragraphs");
    result[2].innerHTML = titlesAndParagraphsLength;

}

buttonAll[4].onclick=function() {

    newArticle(articlesAll);
    for (let i = 0; i < result.length; i++) {

        result[i].innerHTML = 0;
        
    }

}


function newArticle(article) {

    if (article[0].classList.contains("visibile")) {
        
        article[0].classList.remove("visibile");
        article[1].classList.add("visibile");

    } else if (article[1].classList.contains("visibile")) {
        
        article[1].classList.remove("visibile");
        article[2].classList.add("visibile");

    } else if (article[2].classList.contains("visibile")) {
        
        article[2].classList.remove("visibile");
        article[0].classList.add("visibile");

    }

}