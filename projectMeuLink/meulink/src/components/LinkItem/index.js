import './link-item.css';
import {FiX, FiClipboard} from 'react-icons/fi';

export default function LinkItem({closeModal, content}){


    // função para quando a pessoa clicar para copiar o link
    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
        alert("Url copiada com sucesso!")
    }


    return(
        <div className="modal-container">

            <div className="modal-header">
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000" />
                </button>
            </div>

            <span>
                {content.long_url}
            </span>

            <button className="modal-link" onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color="#FFF" />
            </button>

        </div>
    )
}

