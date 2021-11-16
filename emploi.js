// browser.pageAction.onClicked.addListener(handleClick);
// browser.pageAction.setIcon({path: "icons/téléchargement-19.png"});

const APPLICABLE_PROTOCOLS = ["http:", "https:"];


// ajouter un élément au DOM
var p = document.createElement("p");
p.textContent = "Ce paragraphe a été ajouté par un script de la page.";
p.setAttribute("id", "page-script-para");
console.log('DEBUG', p);
document.body.appendChild(p);

function logTopSites(topSitesArray) {
  for (topSite of topSitesArray) {
    console.log(`Title: ${topSite.title}, URL: ${topSite.url}`);
  }
}

function onError(error) {
  console.log(error);
}

var gettingTopSites = browser.topSites.get({
  includeBlocked: true,
  onePerDomain: false
});

gettingTopSites.then(logTopSites, onError);

// définition d’une nouvelle propriété pour la fenêtre
window.toto = "Cette variable globale a été ajoutée par un script de la page.";

// redéfinition de la fonction intégrée window.confirm()
window.confirm = function() {
  alert("Ce script de page peut aussi redéfinir ’confirm’.");
}



  /*
  When first loaded, initialize the page action for all tabs.
  */
//   var gettingAllTabs = browser.tabs.query({});
//   console.log('DEBUG', gettingAllTabs);
//   gettingAllTabs.then((tabs) => {
//     for (let tab of tabs) {
//       initializePageAction(tab);
//     }
//   });

// function initializePageAction(tab) {
//     console.log('DEBUG', tab);
//     if (protocolIsApplicable(tab.url)) {
//       browser.pageAction.setIcon({tabId: tab.id, path: "icon/téléchargement-19.png"});
//       browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
//       browser.pageAction.show(tab.id);
//     }
//   }

/*
Returns true only if the URL's protocol is in APPLICABLE_PROTOCOLS.
Argument url must be a valid URL string.
*/
// function protocolIsApplicable(url) {
//     const protocol = (new URL(url)).protocol;
//     return APPLICABLE_PROTOCOLS.includes(protocol);
//   }
  
