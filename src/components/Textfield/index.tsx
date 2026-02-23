import React, { useState } from 'react';
import { TextInput, HelperText } from 'react-native-paper'; // Importe o HelperText
import * as S from './style';
import { theme } from '../../theme';

type TextfieldProps = {
  label: string;
  placeholder?: string;
  isPassword?: boolean;
  value: string;
  hasError?: boolean;
  onChangeText: (text: string) => void;
  helpText?: string;
};

type TextfieldAllProps = TextfieldProps & React.ComponentProps<typeof S.Input>;

const TextField = ({
  label,
  placeholder,
  isPassword,
  value,
  onChangeText,
  hasError,
  helpText,
  ...rest
}: TextfieldAllProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Label error={hasError}>{label}</S.Label>

        <S.Input
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          error={hasError}
          secureTextEntry={isPassword && !showPassword}
          right={
            isPassword && (
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                color={hasError ? theme.colors.destructive : ''}
                onPress={() => setShowPassword(!showPassword)}
                forceTextInputFocus={false}
              />
            )
          }
          {...rest}
        />
      </S.InputWrapper>

      {helpText && (
        <HelperText
          type='info'
          visible={!!helpText}
          padding='none'
          style={{
            color: theme.colors.mutedText,
          }}
        >
          {helpText}
        </HelperText>
      )}
    </S.Container>
  );
};

export default TextField;
