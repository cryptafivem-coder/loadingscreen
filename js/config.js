//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16
//
//  =====================================================
//  Configuration pour : [FR] Crypta | SCP RP
//  =====================================================

// URL du logo du serveur
// Laisse vide pour utiliser du texte à la place
// (Place le fichier dans le dossier images/)
var l_serverImage = "logo.png";

// Centrer le logo ?
var l_centerLogo = false;

// Afficher la map et le gamemode en cours ?
var l_displayMapGamemode = true;

// Nom du serveur personnalisé
// Laisse vide pour récupérer automatiquement le nom du serveur
var l_serverName = "[FR] Crypta | SCP RP";

// Utiliser une vidéo en fond ?
// Si false, ce sont des images qui seront utilisées
var l_bgVideo = false;

// Fond vidéo (si l_bgVideo = true)
// Vidéos disponibles dans backgrounds/videos/
var l_background = "coldnight.webm";

// Activer les fonds basés sur la map actuelle ?
// (Le fichier doit s'appeler comme la map, ex: rp_cbrnu.jpg)
var l_bgImageMapBased = false;

// Images de fond (si l_bgVideo = false)
// Place tes images dans backgrounds/images/
// Tu peux aussi utiliser des URLs externes
var l_bgImages = [
	"https://i.imgur.com/odsLZNA.png",
	"https://i.imgur.com/5XiPRKv.jpeg",
	"https://i.imgur.com/oaZX0lA.jpeg"
];

// Ordre aléatoire des images de fond ?
var l_bgImagesRandom = true;

// Durée entre chaque changement d'image (en millisecondes)
var l_bgImageDuration = 6000;

// Vitesse du fondu entre les images (en millisecondes)
var l_bgImageFadeVelocity = 2000;

// Activer un overlay par dessus le fond ?
var l_bgOverlay = true;

// Assombrissement du fond (0 = aucun, 100 = noir total)
var l_bgDarkening = 60;

// Jouer de la musique pendant le chargement ?
var l_music = true;

// Afficher le nom de la musique en cours ?
var l_musicDisplay = true;

// Playlist musicale
// Tu peux ajouter des fichiers .ogg (dans le dossier music/)
// ou des liens YouTube
var l_musicPlaylist = [
	// Remplace par ta propre musique SCP si tu veux :
	// {ogg: "ma_musique.ogg", name: "Nom de la musique"},
	// {youtube: "https://www.youtube.com/watch?v=XXXXXXX", name: "Nom"},
	{ogg: "lullaby.ogg", name: "Lullaby of Deserted Hell"},
	{ogg: "falls_in_fall.ogg", name: "秋に舞う椛と滝飛沫"},
	{youtube: "https://www.youtube.com/watch?v=YJaeH8ffl_M", name: "joura - The SCP Foundation Main Theme"},
];

// Ordre aléatoire de la playlist ?
var l_musicRandom = true;

// Volume de la musique (0 = muet, 100 = maximum)
var l_musicVolume = 20;

// Activer les messages personnalisés ?
var l_messagesEnabled = true;

// Tes messages personnalisés
var l_messages = [
	"Bienvenue sur [FR] Crypta | SCP RP !",
	"Respectez le règlement RP pour une meilleure expérience.",
	"Le FearRP est obligatoire — craignez pour votre vie !",
	"Rejoignez notre Discord pour rester informé des événements.",
	"Le RDM est strictement interdit sur ce serveur.",
	"Utilisez /demande pour contacter le staff en jeu.",
	"Bonne chance, Agent. La Fondation vous surveille.",
	"SCP-682 est en confinement... pour l'instant.",
	"Ne regardez pas SCP-096 dans les yeux.",
	"Signalez tout bug au staff via /demande.",
];

// Ordre aléatoire des messages ?
var l_messagesRandom = true;

// Délai entre les messages (en millisecondes)
var l_messagesDelay = 5000;

// Durée du fondu des messages (en millisecondes)
var l_messagesFade = 1000;

// Afficher les erreurs dans GMod ?
// Utile pour déboguer
var l_showErrorsIngame = false;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
