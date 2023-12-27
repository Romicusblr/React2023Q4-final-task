import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useLocalization } from '@/context/LocalizationContext';
import { useAppDispatch } from '@/hooks/redux';
import { setHeaders } from '@/store/slices/appSlice';

const HeadersEditor = () => {
  const { strings } = useLocalization();
  const dispatch = useAppDispatch();

  const handleChange = (newValue: string) => {
    dispatch(setHeaders(newValue));
  };

  const CodeMirrorProps: ReactCodeMirrorProps = {
    value: '',
    basicSetup: { lineNumbers: true },
    theme: 'none',
    onChange: handleChange,
  };

  return (
    <div className="relative text-base resize-none rounded-xl outline-none border-4 border-gray-600 bg-gray-800 text-gray-400 p-2 overflow-auto w-2/6 h-full">
      <p className="text-base text-gray-400 pl-2 pt-1">
        {strings.headersTitle}
      </p>
      <CodeMirror {...CodeMirrorProps} />
    </div>
  );
};

export { HeadersEditor };
