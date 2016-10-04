var React= require('react');

var StarRater = React.createClass({
    render: function(){
        var stars =[];
        for (var i=0; i<5; i++){
            
            var className;
            console.log(this.props)
            if(i < this.props.rating || 0){
                console.log('passing rating')
                className = 'fa fa-star';
            }
            else {
                console.log('fafa 0')
                className='fa fa-star-o';
            }
            var star=(
                <i className={className} key={i} onClick={this.props.onChange.bind(null, i + 1)}>
                </i>);
                stars.push(star);
        }
        return(<span className="star-rater">{stars}</span>);
    }

});

module.exports = StarRater;