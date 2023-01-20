import React, { type FC } from 'react';

export const Text: FC<{ title: string }> = (props: any) => <h1>title:{props.title}</h1>;
