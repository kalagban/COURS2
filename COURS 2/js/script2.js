//les fonctions
function dir_bonjour() {
  document.writeln("Bonjour les gars" + "<br/>")
}
dir_bonjour()

function somme(a, b) {
  document.writeln(a + b + "<br/>")
}
somme(10, 20)

function puissance(a, n) {
  return a ** n
}
document.writeln(puissance(5, 2) + "<br/>")

document.writeln("script2")

const personne = {
  nom: 'Camara',
  prenom: 'Kalagban',
  age: 18
}
document.writeln('<br/>' + personne.age + '<br/>')

// les classes
class Personne {
  constructor(nom, prenom, age) { this.nom = nom, this.prenom = prenom, this.age = age }
  affichernom() { return this.nom }
  afficherprenom() { return this.prenom }
  afficherage() { return this.age }
}

//utilisation du model Class
const p1 = new Personne('Camara', 'kalagban', 21)
const p2 = new Personne('kaba', 'Mamady', 22)
const p3 = new Personne('kaba', 'houley', 20)

document.writeln("nom: " + p1.affichernom() + " prenom: " + p1.afficherprenom() + " age: " + p1.afficherage() + "ans" + "<br/>")
document.writeln("nom: " + p2.affichernom() + " prenom: " + p2.afficherprenom() + " age: " + p2.afficherage() + "ans" + "<br/>")
document.writeln("nom: " + p3.affichernom() + " prenom: " + p3.afficherprenom() + " age: " + p3.afficherage() + "ans" + "<br/>")
"<br/>"
class Universite {
  constructor(nom, quartier, statut) { this.nom = nom, this.quartier = quartier, this.statut = statut }
  affichernom() { return this.nom }
  afficherquartier() { return this.quartier }
  afficherstatut() { return this.statut }
}
const u1 = new Universite('Kofi Annan', 'Nongo', 'Privee')
const u2 = new Universite('Gamal Abdel Nassr', 'Dixin', 'Public')
const u3 = new Universite('UNC', 'Nongo', 'privee')


document.writeln("nom: " + u1.affichernom() + " quartier: " + u1.afficherquartier() + " statut: " + u1.afficherstatut() + "<br/>")
document.writeln("nom: " + u2.affichernom() + " quartier: " + u2.afficherquartier() + " statut: " + u2.afficherstatut() + "<br/>")
document.writeln("nom: " + u3.affichernom() + " quartier: " + u3.afficherquartier() + " statut: " + u3.afficherstatut() + "<br/>")