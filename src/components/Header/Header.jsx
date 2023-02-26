import { RequestForm } from "../RequestForm/RequestForm"
import './header.css'
export const Header = ({onSubmit, value}) => {
    return (
        <div className = "header">
            <RequestForm onSubmit={onSubmit} value={value} />
        </div>
    )
}