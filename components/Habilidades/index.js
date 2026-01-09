import style from '../../styles/Habilidades.module.css';

function Habilidades() {
   return (
      <section className={style.conteiner_habilidades }>
         <h1>
            Habilidades
         </h1>
         <div className={style.habilidades_image_pai }>
            <div className={style.habilidades_image_filho} >
               <img 
                  src="https://devicon-website.vercel.app/api/javascript/original.svg"
               />
               <img 
                  src="https://devicon-website.vercel.app/api/nodejs/original.svg"
               />
            </div>
            <div className={style.habilidades_image_filho} >
               <img 
                  src="https://devicon-website.vercel.app/api/react/original.svg"
               />
               <img 
                  src="https://devicon-website.vercel.app/api/python/original.svg"
               />
            </div> 
            <div className={style.habilidades_image_filho} >
               <img 
                  src="https://devicon-website.vercel.app/api/postgresql/original.svg"
                  
               />
               <img 
                  src="https://devicon-website.vercel.app/api/git/original.svg"
               />
            </div>
            <div className={style.habilidades_image_filho} >
               <img 
                  src="https://devicon-website.vercel.app/api/html5/original.svg"
               />
               <img 
                  src="https://devicon-website.vercel.app/api/css3/original.svg"
               />
            </div>
         </div>
      </section>
   )
}

export default Habilidades;