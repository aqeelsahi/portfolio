import { MouseEventHandler, ReactNode } from "react"

const Toast = ({image, title, subTitle, text, closeBtn, actionBtn}: {image?: ReactNode; title: string; subTitle?: string; text: string; closeBtn?: boolean; actionBtn?: {label: string, onClick: MouseEventHandler<HTMLButtonElement>}}) => {
  return (
    <div className="toast fade show position-fixed bottom-0 m-3 p-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
            {image ??
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>}
            &nbsp;<strong className="me-auto">{title}</strong>
            {subTitle && <small>{subTitle}</small>}
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
            {text}
        </div>
        {(actionBtn || closeBtn) &&
        <div className="p-2 border-top d-flex justify-content-end">
            {actionBtn &&<button type="button" className="btn btn-primary btn-sm" onClick={actionBtn.onClick}>{actionBtn.label}</button>}
            &nbsp;
            {closeBtn &&<button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>}
        </div>}
    </div>
  )
}

export default Toast