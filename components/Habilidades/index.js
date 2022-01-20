import style from '../../styles/Habilidades.module.css';

function Habilidades() {
   return (
      <section className={style.conteiner_habilidades }>
         <h1>
            Habilidades
         </h1>
         <div className={style.habilidades_image_pai }>
               <img 
                  className={style.habilidades_image_filho} 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
               />
               <img 
                  className={style.habilidades_image_filho}  
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
               />
               <img 
                  className={style.habilidades_image_filho} 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
               />
               <img 
                  className={style.habilidades_image_filho}  
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
               />
               <img 
                  className={style.habilidades_image_filho}  
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
               />
               <img 
                  className={style.habilidades_image_filho}  
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
               />
               <img 
                  className={style.habilidades_image_filho}  
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
               />
         </div>
      </section>
   )
}

export default Habilidades;