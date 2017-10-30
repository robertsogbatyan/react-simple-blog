import React from 'react';


export default function(url) {
	return function(Component) {
		class WithLoader extends React.Component {
			state = {
				data: []
			}
			componentDidMount() {
				fetch(url)
					.then((res) => res.json())
					.then((data) => this.setState({ data }))
			}
			render() {
				return (
					<Component
						{...this.props}
						data={this.state.data}
					/>
				)
			}
		}
	
		return WithLoader;
	}
}