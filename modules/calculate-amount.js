const possibleNotes = [100, 50, 20, 10];

exports.calculatePossibleAmount = (amount) => {
  if (!amount || amount === '' || amount === 0 || amount === '0') {
    return [];
  }

  if (Number.isNaN(Number(amount)) || amount < 0) {
    //eslint-disable-next-line no-throw-literal
    throw {
      code: 406,
      message: 'InvalidArgumentException'
    };
  }

  let normalizedAmount = parseInt(amount, 10);
  let noAvailableNotes = false;
  const selectedNotes = [];

  while (normalizedAmount > 0) {
    let selectedNote;
    //eslint-disable-next-line
    for (let note of possibleNotes) {
      if (normalizedAmount >= note) {
        selectedNotes.push(note);
        selectedNote = note;
        break;
      }
    }
    if (!selectedNote) {
      noAvailableNotes = true;
      break;
    }
    normalizedAmount -= selectedNote;
  }

  if (noAvailableNotes) {
    //eslint-disable-next-line no-throw-literal
    throw {
      code: 500,
      message: 'NoteUnavailableException'
    };
  }

  return selectedNotes;
};
