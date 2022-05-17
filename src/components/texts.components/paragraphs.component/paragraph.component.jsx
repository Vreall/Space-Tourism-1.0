import './paragraph.styles.scss';
const Paragraph = (props) => {
	const { className, paragraph } = props;
	return <p className={`paragraph ${className}`}>{paragraph}</p>;
};

export default Paragraph;
