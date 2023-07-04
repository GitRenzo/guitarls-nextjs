import Image from "next/image"

 function Guitarra({guitarra}) {
  const { nombre, descripcion, precio, image, url } = guitarra
   return (
    <div>
      <Image src={image.data.attributes.formats.medium}/>
    </div>
   )
 }
 
 export default Guitarra