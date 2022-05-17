import './sectionTitle.styles.scss';
const SectionTitle = (props) => {
	const { span, content, className } = props;
	return (
		<h3 className={`sectionTitle ${className}`}>
			<span>{span} </span>
			{content}
		</h3>
	);
};

export default SectionTitle;
