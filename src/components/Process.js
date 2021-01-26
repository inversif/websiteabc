import charcoalBurn  from '../assets/charcoal_burning.gif';
import coconutShell from '../assets/coconut_shell.gif';

function Process()
{
    return(
        <div>
            {/* <h1 className="display-2">Charc</h1> */}
            <div className="d-flex d-md-block d-sm-block flex-row justify-content-center mb-5">
                <div className="card mx-auto border-0">
                    <div className="card-body mx-auto">
                        <img src={charcoalBurn} alt="charcoal is being burned" />
                        {/* <h5 className="card-title">Card title</h5> */}
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </div>
                <div className="card mx-auto border-0">
                    <div className="card-body mx-auto">
                        <img src={coconutShell} alt="charcoal examined" />
                        {/* <h5 className="card-title">Card title</h5> */}
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;