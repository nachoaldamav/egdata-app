const MoreInfo = ({text, linesToTruncate}) => {
    const [clippedText, setClippedText] = React.useState(false);
    return clippedText ? (
      <MoreLessComponent truncatedText={clippedText} fullText={text} />
    ) : (
      <Text
        numberOfLines={linesToTruncate}
        ellipsizeMode={'tail'}
        onTextLayout={(event) => {
          //get all lines
          const { lines } = event.nativeEvent;
          //get lines after it truncate
          let text = lines
            .splice(0, linesToTruncate)
            .map((line) => line.text)
            .join('');
          //substring with some random digit, this might need more work here based on the font size
          //
          setClippedText(text.substr(0, text.length - 9));
        }}>
        {text}
      </Text>
    );
  };