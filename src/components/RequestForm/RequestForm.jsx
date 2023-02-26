import './form.css';
import { ReactComponent as Search} from '../../imgs/search.svg';

export const RequestForm = ({onSubmit, value}) => {
    return (
        <form onSubmit={onSubmit} className="form">
            <input type="text" name="request" className="field" defaultValue={value}></input>
            <button type="submit" className="button"><Search className="icon" /></button>
        </form>
    )

}