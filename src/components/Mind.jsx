
const Mind = () => {
   
    const handleClick = () => {
        console.log('click');
        
    }
    return (
        <div className="mind">
            <div className="text">
                <h3>As-tu Un Projet En Tete ?</h3>
                <p>Etablis un cahier de charge de ce projet et viens me voir pour qu'on en parle <br />
                    Dans le bur de trouver une solution et réaliser le projet</p>
            </div>
            <button onClick={() => handleClick()}> Me Contacter</button>
        </div>
    );
}

export default Mind;