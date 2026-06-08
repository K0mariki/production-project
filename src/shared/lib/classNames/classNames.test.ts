import { classNames } from './classNames';

describe('classNames', () => {
  describe('вызов только с cls классом', () => {
    test('должен вернуть переданный в параметр класс', () => {
      expect(classNames('someClass')).toBe('someClass');
    });

    test('должен вернуть пустую строку, если cls пустой', () => {
      expect(classNames(undefined)).toBe('');
    });
  });

  describe('вызов только с модификаторами (mods)', () => {
    test('должен вернуть строку с true модификаторами', () => {
      const expected = 'hovered scrollable';
      expect(classNames(
        '',
        { hovered: true, scrollable: true },
      )).toBe(expected);
    });

    test('должен вернуть строку без модификатора, если ему задать false', () => {
      const expected = 'hovered';
      expect(classNames(
        '',
        { hovered: true, scrollable: false },
      )).toBe(expected);
    });

    test('должен вернуть строку без модификатора, если ему задать undefined', () => {
      const expected = 'hovered';
      expect(classNames(
        '',
        { hovered: true, scrollable: undefined },
      )).toBe(expected);
    });
  });

  describe('вызов только с additional классами', () => {
    test('должен вернуть строку с дополнитльными классами', () => {
      const expected = 'class1 class2';
      expect(classNames(
        '',
        {},
        ['class1', 'class2'],
      )).toBe(expected);
    });

    test(
      'должен вернуть пустую строку, если не переданы дополнительные классы',
      () => {
        const expected = '';
        expect(classNames('', {}, [])).toBe(expected);
      },
    );
  });

  describe('вызов с нескольки параметрами', () => {
    test(
      'должен вернуть вернуть строку где классы будут указаны в порядке cls, additional, mods',
      () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true }, ['class1', 'class2'])).toBe(expected);
      },
    );
  });
});
