const cloudinary= require("cloudinary").v2
cloudinary.config({
    cloud_name: 'dp8trmvci',
    api_key: '117143947831187',
    api_secret: 'NddM_fnk8jSrh8bi8u0QDdoV2Mk',
    secure: true
})  
const uploadImage = async(request, response) => {
    const files = request.files.photo
    console.log(typeof files.length)
    if (typeof files.length === "undefined"){
        //upload the single image
        console.log("here single file")
        const result  = await cloudinary.uploader.upload(files.TempFilePath,{tranformation:[
            {width:600, crop: "scale"},
            {quality : "auto", fetch_format : "auto"}
        ]},(err, result)=>{})
        response.json(result)
    }
    if(typeof files.length !== "undefined"){
        let images = []
        Promise.all(files.map(async(file)=>{
            const result = await cloudinary.uploader.upload(file.TempFilePath,{tranformation:[
                {width:600, crop: "scale"},
                {quality : "auto", fetch_format : "auto"}
            ]},(err, result)=>{})
            return result
        })).then(result=>{
            // image.push(result.map((data)=>{return data.secure_url}))
            response.json({data: result})
        })
    }
}
module.exports = uploadImage