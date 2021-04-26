import { useForm } from 'react-hook-form';

function Formulario() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    function enviarCliente(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(enviarCliente)}>
            <div className="form-group">
                <label>Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    {...register('nombre', { required: true, minLength: 4 })}
                />
                {errors.nombre && <p className="error">El campo nombre es incorrecto</p>}
            </div>
            <div className="form-group">
                <label>Apellidos</label>
                <input
                    type="text"
                    className="form-control"
                    {...register('apellidos')}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="text"
                    className="form-control"
                    {...register('email')}
                />
            </div>
            <div className="form-group">
                <label>Cuota</label>
                <input
                    type="text"
                    className="form-control"
                    {...register('cuota')}
                />
            </div>
            <div className="form-group">
                <label>Activo</label>
                <input
                    type="text"
                    className="form-control"
                    {...register('activo')}
                />
            </div>
            <div className="form-group">
                <label>Dni</label>
                <input
                    type="text"
                    className="form-control"
                    {...register('dni')}
                />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    );
}

export default Formulario;