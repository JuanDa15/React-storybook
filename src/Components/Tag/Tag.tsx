import { TAG_SIZE, TagSize } from './interfaces';

interface TagProps {
  /**
   * Font size of the tag
   * @default 'small'
   */
  size?: TagSize;
  /**
   * Background color of the tag
   */
  accentColor?: string;
  /**
   * ClassName to be added to the tag
   */
  className?: string;
  /**
   * Type of the tag
   * @default 'solid'
   * @type 'solid' | 'outlined' | 'text'
   */
  type: 'solid' | 'outlined' | 'text';
  /**
   * Rest of the props to be passed to the tag
   */
  [x: string]: any;
}

export default function Tag({
  size = 'small',
  accentColor,
  type = 'solid',
  className = '',
  ...others
}: TagProps): JSX.Element {
  const typeStyles = {
    solid: {
      backgroundColor: accentColor,
      color: 'white',
    },
    outlined: {
      border: `1px solid ${accentColor}`,
      color: accentColor,
    },
    text: {
      color: accentColor,
    },
  };

  return (
    <span
      className={['rounded-full px-4 py-1', TAG_SIZE[size], className].join(
        ' '
      )}
      style={typeStyles[type]}
      {...others}
    >
      I'm the span
    </span>
  );
}
