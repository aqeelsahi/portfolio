import Countdown from '../Countdown';
import './style.css'

const Cover = () => {
    const targetDate = "2023-12-31T23:59:59";
    // const targetDate = "2023-12-11T12:14:59";

  return (
    <div className='form-container'>
        <main className="px-3">
            <h1>Cover your page.</h1>
            <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p className="lead">
            <a href="https://desi8n.au" className="btn btn-sm btn-info fw-bold">Learn more</a>
            </p>
        <h1>
            <Countdown targetDate={targetDate} />
        </h1>
        </main>
  </div>
  )
}

export default Cover