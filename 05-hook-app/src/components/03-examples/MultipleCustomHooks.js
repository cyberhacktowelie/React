import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

import '../02-useEffectt/effects.css';

export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1);
    // const state = useFetch('https://www.breakingbadapi.com/api/quotes/1');
    const { loading, data } = useFetch('https://www.breakingbadapi.com/api/quotes/'+counter);
    
    // console.log(state);

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <br/>

           
            {/* { (loading) &&  <div className="alert alert-info text-center"> <h2>  Loading... </h2> </div> } */}


            {
                loading ? <div className="alert alert-info text-center" style={{ "borderRadius": "15px" }}> <h2>  Loading... </h2> </div> :
                (
                    <section className="vh-80" style={{ "backgroundColor":"#eee", "borderRadius": "15px" }}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-lg-9 col-xl-7">
                                <div className="card" style={{ "borderRadius": "15px" }}>
                                <div className="card-body p-5">

                                    <div className="text-center mb-4 pb-2">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                                        alt="Bulb" width="100"/>
                                    </div>

                                    <figure className="text-center mb-0">
                                    <blockquote className="blockquote">
                                        <p className="pb-3">
                                        <i className="fas fa-quote-left fa-xs text-primary"></i>
                                        <span className="lead font-italic">{ quote }</span>
                                        <i className="fas fa-quote-right fa-xs text-primary"></i>
                                        </p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer mb-0">
                                        { author } 
                                    </figcaption>
                                    </figure>

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                )
            }
            <button 
                className="btn btn-primary mt-5"
                onClick={ increment }
            >
                Siguiente Quote
            </button>
           
           
        </div>


    );
}


