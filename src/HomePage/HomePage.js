import React, { Component } from 'react'
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

class HomePage extends Component {
  state = {
    data: {
      datasets: [
        {
            data: [],
            backgroundColor: [
                '#793E51',
                '#C08497',
                '#F7AF9D',
                '#F7E3AF',
                '#F3EEC3',
                '#427176',
                '#B0D0D3',
            ]
        }
      ],
      labels: []
    } 
  }

  async componentDidMount(){
    const res = await axios.get('http://localhost:4000/budget');
    let tempData = this.state.data;
    for(let i=0;i<res.data.myBudget.length;i++){
        tempData.datasets[0].data[i]=res.data.myBudget[i].budget;
        tempData.labels[i] = res.data.myBudget[i].title;
    }

    this.setState({
      data: Object.assign({}, this.state.data, {
          data: tempData
      })
    });
  }
  
  render() {
    return (
        <main className="center" id="main">

        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Chart</h1>
                <p>
                    <Pie 
                    data={this.state.data}
                    height={400}
                    width={400}
                     />
                </p>
            </article>

        </div>

    </main>
        
    )
  }
}

export default HomePage;