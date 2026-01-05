# Monica

[[Ai Convos/Monica/Monica]]

[[now2023-12-30]], [[MOC promptenhancer]]

* * *

In Monica, this is labeled "iteration". Seems to be the process that makes the text more dense without adding length.

* * *

Monica sent this, but then told me it didn’t know what it was referring to and wanted to move on.

  

# Update (2/19/24)

- This is the iterative prompt that shrinks while getting denser in content.  In other words, the prompt keeps bring up new relevant topics that weren’t originally included in order to make the prompt more expansive, but at the same time making the prompt shorter, i.e. using less words/characters.

  

```json
[
    {
        "Missing_Entities": "Theological;Phenomenological",
        "Denser_Summary": "Researching mystical experiences and Nihiltheism; Dialectical conversation with experts; Perspectives: Theological, Phenomenological, Scientific/Naturalistic."
    },
    {
        "Missing_Entities": "Metaphysical Naturalism;Multiverse Implications",
        "Denser_Summary": "Researching mystical experiences and Nihiltheism; Dialectical conversation with experts; Perspectives: Theological, Phenomenological, Scientific/Naturalistic; Metaphysical Naturalism; Multiverse Implications."
    },
    {
        "Missing_Entities": "Block Universe Implications;Evidence for theories",
        "Denser_Summary": "Researching mystical experiences and Nihiltheism; Dialectical conversation with experts; Perspectives: Theological, Phenomenological, Scientific/Naturalistic; Metaphysical Naturalism; Multiverse Implications; Block Universe Implications; Evidence for theories."
    },
    {
        "Missing_Entities": "Conclusions of the theory",
        "Denser_Summary": "Researching mystical experiences and Nihiltheism; Dialectical conversation with experts; Perspectives: Theological, Phenomenological, Scientific/Naturalistic; Metaphysical Naturalism; Multiverse Implications; Block Universe Implications; Evidence for theories; Conclusions of the theory."
    },
    {
        "Missing_Entities": "Skepticism and counterarguments",
        "Denser_Summary": "Researching mystical experiences and Nihiltheism; Dialectical conversation with experts; Perspectives: Theological, Phenomenological, Scientific/Naturalistic; Metaphysical Naturalism; Multiverse Implications; Block Universe Implications; Evidence for theories; Conclusions of the theory; Skepticism and counterarguments."
    }
]
```