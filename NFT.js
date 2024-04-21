// create a variable to hold your NFT's
let myNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, artist, image) {
  let newNFT = {
    name: name,
    artist: artist,
    image: image,
    id: myNFTs.length + 1
  }
  myNFTs.push(newNFT);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs () {
  myNFTs.forEach(nft => {
    console.log("Name: " + nft.name);
    console.log("Artist: " + nft.artist);
    console.log("Image: " + nft.image);
    console.log("ID: " + nft.id);
    console.log("--------------------");
  });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return myNFTs.length;
}

// call your functions below this line
mintNFT("Mona Lisa", "Leonardo da Vinci", "image.jpg");
mintNFT("The Starry Night", "Vincent van Gogh", "image.jpg");
mintNFT("The Persistence of Memory", "Salvador Dalí", "image.jpg");

listNFTs();
console.log("Total supply: " + getTotalSupply());