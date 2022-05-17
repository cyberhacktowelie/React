

// const getImagenPromesa = () => new Promise( resolve => resolve('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'));
// getImagenPromesa().then(console.log);

export const getImage = async() => {

    try{
        const apiKey = 'QKXFCiGkEFDCSb1fyIPKGNNZ2wIx1E5g';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append(img);

        return url;

        // console.log(data.data.images.original.url);
    }catch(error){
        console.warn(error);
        return 'No existe la imagen';
    }
};

// getImage();
