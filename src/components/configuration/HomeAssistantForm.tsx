import React from 'react';
import { Box, Checkbox, Text } from '@mantine/core';
import { Trans, useTranslation } from 'react-i18next';
import { useAppContext } from '@/context/useAppContext.ts';

export const HomeAssistantForm: React.FC = () => {
  const { t } = useTranslation();
  const { firmwareOptions, setFirmwareOptions } = useAppContext();

  return (
    <>
      <Box mt="xl">
        <Text>
          <Trans i18nKey="configuration.ha.init" components={{ strong: <strong /> }} />
        </Text>
        <Checkbox
          label={t('configuration.ha.fields.enable.label')}
          checked={firmwareOptions.ha}
          onChange={(event) => {
            const checked = event.currentTarget.checked;
            setFirmwareOptions((prev) => ({
              ...prev,
              ha: checked,
            }));
          }}
          mt="md"
        />
      </Box>
      {firmwareOptions.ha && (
        <Box mt="xl">
          <Text>
            <Trans
              i18nKey="configuration.pressureSensor.init"
              components={{ strong: <strong /> }}
            />
          </Text>
          <Checkbox
            label={t('configuration.pressureSensor.fields.enable.label')}
            checked={firmwareOptions.enablePressureSensors}
            onChange={(event) => {
              const checked = event.currentTarget.checked;
              setFirmwareOptions((prev) => ({
                ...prev,
                enablePressureSensors: checked,
              }));
            }}
            mt="md"
          />
        </Box>
      )}
    </>
  );
};
