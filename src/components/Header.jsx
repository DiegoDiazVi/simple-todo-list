function Header({text, onSubmit, onChange}) {
    return (
        <form  className='task-form' onSubmit={onSubmit}>
            <input className='task-form-input' name='input-task' type="text" placeholder='Ingresa tu tarea' value={text} onChange={onChange}/>
            <button className='task-form-button' type="submit"> Agregar tarea</button>
        </form>
    );
}

export default Header;