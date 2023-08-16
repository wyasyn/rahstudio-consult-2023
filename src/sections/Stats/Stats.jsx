import './Stats.scss'

function Stats() {
  return (
    <section className="stats">
        <div className="stats-container container">
            <div className="stat">
                <span className='number'>
                    200+
                </span>
                <span className="detail">
                    Happy <br />
                    Clients
                </span>
            </div>
            <div className="stat">
                <span className='number'>
                    250+
                </span>
                <span className="detail">
                    Completed  <br />
                    Projects
                </span>
            </div>
            <div className="stat">
                <span className='number'>
                    50+
                </span>
                <span className="detail">
                    Satisfied <br />
                    Employees
                </span>
            </div>
            <div className="stat">
                <span className='number'>
                    10
                </span>
                <span className="detail">
                    Awards <br />
                    Won
                </span>
            </div>
        </div>
    </section>
  )
}

export default Stats