import { useState } from 'react';

import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';


import api from '../../services/api';

import { saveLink } from '../../services/storeLinks';




export default function Home(){
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    // function para associar o input ao botão
    async function handleShortLink(){
      

      try {
        const response = await api.post('/shorten', {
          long_url: link
        })

      setData(response.data);
      setShowModal(true);


      saveLink('@encurtaLink', response.data)

      setLink('');

      }catch{
        alert("ops parece que deu erro")
        setLink('');
      }
    }



    return(
      <div className="container-home">
        <div className="logo">
          <img src="/logo.png" alt="Encurtar Link Logo" />
          <h1>Encurtador de Links</h1>
          <span>Cole seu link para encurtar👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff"/>
            <input  placeholder='Cole seu link aqui!'
            value={link}
            onChange={ (e) => setLink(e.target.value) }
            />
          </div>

        
          <button onClick={handleShortLink}>Encurtar Link!</button>
          
        </div>
         {/* /input */}


         <Menu />

        {/* Renderização de confirmação/condição */}
        { showModal && (
          <LinkItem
            closeModal={ () => setShowModal(false) }
            content={data}
          />
           
        ) }



      <div className="anunc">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8071721547212482"
          crossorigin="anonymous"></script>
      
        <ins class="adsbygoogle"

          data-ad-client="ca-pub-8071721547212482"
          data-ad-slot="5921215403"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>


      </div>
    )
  }