let message = 'CRXZeePrime,LIMIT:temperature,LEVEL:HIGH';
message = message.substr(3);

const gMCUPreambles = {
  ZeePrime: { id: 'fdsa', cmd: 'abc', module: 'ZeePrime' },
};

function constructServerMessage(messageBackToServer, rewriteCmd) {
  //
  messageBackToServer = messageBackToServer.trim();
  // auto switch a machine state per config
  const splitMessage = messageBackToServer.split(',');
  const mm = splitMessage.shift().trim();
  const srverData = gMCUPreambles[mm];

  if (srverData !== undefined) {
    while (splitMessage.length) {
      let pair = splitMessage.shift().trim();
      pair = pair.split(':');
      srverData[pair[0].trim()] = pair[1].trim();
    }
    if (rewriteCmd) {
      srverData.cmd = rewriteCmd;
    }

    console.log(srverData);
    return ({ message: srverData });
  }

  return (false);
}

constructServerMessage(message);

describe('example', () => {
  test('true to be true', () => {
    const actual = true;
    const expected = true;
    expect(actual).toBe(expected);
  });
});
