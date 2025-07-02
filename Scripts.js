let image =document.getElementById("image-presentation");
image.addEventListener("mouseover", function(){
image.style.border ="2px solid";
});
image.addEventListener("mouseout", function(){
image.style.border ="none";
});

//Validation du formulaire

function validerFormulaire() {
  const form = document.forms.formulaire;

  if (form.nom.value ==="") {
  alert("Veuillez entrer votre nom!");
  form.nom.focus();
 return false;
}

if (form.prenom.value ==="") {
  alert("Veuillez entrer votre prenom!");
  form.prenom.focus();
 return false;
}

if (form.email.value ==="") {
  alert("Veuillez entrer votre email valide!");
  form.email.focus();
 return false;
}

if (form.sujet.value ==="") {
  alert("Veuillez entrer l'objet!");
  form.sujet.focus();
 return false;
}

if (form.message.value ==="") {
  alert("Veuillez entrer votre message!");
  form.message.focus();
 return false;
}

alert("Formulaire validé avec succès!");
return true;
}

/*//Télécharger de fichiers
document.getElementById('downloadCV').addEventListener('click', function() {
    // Créer un lien invisible
    const link = document.createElement('a');
    link.href = 'fichiers pdf\Dondina_LIMAZIE MAZIGNADA_CV+.pdf';
    link.download = 'Dondina_LIMAZIE MAZIGNADA_CV+.pdf'; // Nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('downloadCV').addEventListener('click', function() {
    if(confirm('Voulez-vous télécharger mon CV ?')) {
         window.open('fichiers pdf\Dondina_LIMAZIE MAZIGNADA_CV+.pdf', '_blank')
    }
});*/