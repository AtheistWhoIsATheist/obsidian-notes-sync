---
date: 2024-08-23 03:42:50
Date: 2024-08-23 03:41:35
Folders:
  - Prompts / GPTs For NT / Ai Philosopher
---

# Ai Scientist Code

8/23/24

* * *

  

@@ -274,7 +274,7 @@ We do not advise any model that is significantly weaker than GPT-4 level for The

## Containerization

We include a [community-contributed](https://github.com/SakanaAI/AI-Scientist/pull/21) Docker image that may assist with your containerization efforts in `Dockerfile`. We include a [community-contributed](https://github.com/SakanaAI/AI-Scientist/pull/21) Docker image that may assist with your containerization efforts in `experimental/Dockerfile`.

You can use this image like this:

2 changes: 1 addition & 1 deletion2  
ai\_scientist/generate\_ideas.py Original file line number Diff line number Diff line change @@ -506,7 +506,7 @@ def check\_idea\_novelty(

```
    print(f"Using Vertex AI with model {client_model}.")
    client = anthropic.AnthropicVertex()
elif args.model == "gpt-4o-2024-05-13" or args.model == "hybrid":
elif args.model == "gpt-4o-2024-05-13":
    import openai

    print(f"Using OpenAI API with model {args.model}.")
```

2 changes: 1 addition & 1 deletion2  
ai\_scientist/perform\_writeup.py Original file line number Diff line number Diff line change @@ -564,7 +564,7 @@ def perform\_writeup(

```
    print(f"Using Vertex AI with model {client_model}.")
    client = anthropic.AnthropicVertex()
elif args.model == "gpt-4o-2024-05-13" or args.model == "hybrid":
elif args.model == "gpt-4o-2024-05-13":
    import openai

    print(f"Using OpenAI API with model {args.model}.")
```

0  
Dockerfile → experimental/Dockerfile File renamed without changes. 10 changes: 3 additions & 7 deletions10  
experimental/launch\_oe\_scientist.py Original file line number Diff line number Diff line change @@ -188,9 +188,7 @@ def do\_idea( io = InputOutput( yes=True, chat\_history\_file=f"{folder\_name}/{idea\_name}\_aider.txt" ) if model == "hybrid": main\_model = Model("claude-3-5-sonnet-20240620") elif model == "deepseek-coder-v2-0724": if model == "deepseek-coder-v2-0724": main\_model = Model("deepseek/deepseek-coder") elif model == "llama3.1-405b": main\_model = Model("openrouter/meta-llama/llama-3.1-405b-instruct") @@ -224,9 +222,7 @@ def do\_idea( if writeup == "latex": writeup\_file = osp.join(folder\_name, "latex", "template.tex") fnames = \[exp\_file, writeup\_file, notes\] if model == "hybrid": main\_model = Model("gpt-4o-2024-05-13") elif model == "deepseek-coder-v2-0724": if model == "deepseek-coder-v2-0724": main\_model = Model("deepseek/deepseek-coder") elif model == "llama3.1-405b": main\_model = Model("openrouter/meta-llama/llama-3.1-405b-instruct") @@ -346,7 +342,7 @@ def do\_idea(

```
    print(f"Using Vertex AI with model {client_model}.")
    client = anthropic.AnthropicVertex()
elif args.model == "gpt-4o-2024-05-13" or args.model == "hybrid":
elif args.model == "gpt-4o-2024-05-13":
    import openai

    print(f"Using OpenAI API with model {args.model}.")
```

10 changes: 3 additions & 7 deletions10  
launch\_scientist.py Original file line number Diff line number Diff line change @@ -153,9 +153,7 @@ def do\_idea( ## PERFORM EXPERIMENTS fnames = \[exp\_file, vis\_file, notes\] io = InputOutput(yes=True, chat\_history\_file=f"{folder\_name}/{idea\_name}\_aider.txt") if model == "hybrid": main\_model = Model("claude-3-5-sonnet-20240620") elif model == "deepseek-coder-v2-0724": if model == "deepseek-coder-v2-0724": main\_model = Model("deepseek/deepseek-coder") elif model == "llama3.1-405b": main\_model = Model("openrouter/meta-llama/llama-3.1-405b-instruct") @@ -184,9 +182,7 @@ def do\_idea( if writeup == "latex": writeup\_file = osp.join(folder\_name, "latex", "template.tex") fnames = \[exp\_file, writeup\_file, notes\] if model == "hybrid": main\_model = Model("gpt-4o-2024-05-13") elif model == "deepseek-coder-v2-0724": if model == "deepseek-coder-v2-0724": main\_model = Model("deepseek/deepseek-coder") elif model == "llama3.1-405b": main\_model = Model("openrouter/meta-llama/llama-3.1-405b-instruct") @@ -297,7 +293,7 @@ def do\_idea(

```
    print(f"Using Vertex AI with model {client_model}.")
    client = anthropic.AnthropicVertex()
elif args.model == "gpt-4o-2024-05-13" or args.model == "hybrid":
elif args.model == "gpt-4o-2024-05-13":
    import openai

    print(f"Using OpenAI API with model {args.model}.")
```

  

@@ -0,0 +1,75 @@ """ Prepare the enwik8 dataset for character-level language modeling. So instead of encoding with GPT-2 BPE tokens, we just map characters to ints. Will save train.bin, val.bin containing the ids, and meta.pkl containing the encoder and decoder and some other related info. """ import os import pickle import requests import numpy as np

# download the enwik8 dataset

input\_file\_path = os.path.join(os.path.dirname(**file**), 'enwik8') if not os.path.exists(input\_file\_path): data\_url = '[http://mattmahoney.net/dc/enwik8.zip](http://mattmahoney.net/dc/enwik8.zip)' r = requests.get(data\_url) with open(os.path.join(os.path.dirname(**file**), 'enwik8.zip'), 'wb') as f: f.write(r.content)

```
# unzip the enwik8 dataset
import zipfile
with zipfile.ZipFile(os.path.join(os.path.dirname(__file__), 'enwik8.zip'), 'r') as zip_ref:
    zip_ref.extractall(os.path.dirname(__file__))
```

with open(input\_file\_path, 'r', encoding='latin-1') as f: data = f.read() print(f"length of dataset in characters: {len(data):,}")

# get all the unique characters that occur in this text

chars = sorted(list(set(data))) vocab\_size = len(chars) print("all the unique characters:", ''.join(chars)) print(f"vocab size: {vocab\_size:,}")

# create a mapping from characters to integers

stoi = { ch:i for i,ch in enumerate(chars) } itos = { i:ch for i,ch in enumerate(chars) } def encode(s): return \[stoi\[c\] for c in s\] # encoder: take a string, output a list of integers def decode(l): return ''.join(\[itos\[i\] for i in l\]) # decoder: take a list of integers, output a string

# create the train, validation, and test splits

n = len(data) num\_test\_chars = 5000000 train\_data = data\[: -2 \* num\_test\_chars\] val\_data = data\[-2 \* num\_test\_chars: -num\_test\_chars\] test\_data = data\[-num\_test\_chars:\]

# encode all splits to integers

train\_ids = encode(train\_data) val\_ids = encode(val\_data) test\_ids = encode(test\_data)

print(f"train has {len(train\_ids):,} tokens") print(f"val has {len(val\_ids):,} tokens") print(f"test has {len(test\_ids):,} tokens")

# export to bin files

train\_ids = np.array(train\_ids, dtype=np.uint16) val\_ids = np.array(val\_ids, dtype=np.uint16) test\_ids = np.array(test\_ids, dtype=np.uint16)

train\_ids.tofile(os.path.join(os.path.dirname(**file**), 'train.bin')) val\_ids.tofile(os.path.join(os.path.dirname(**file**), 'val.bin')) test\_ids.tofile(os.path.join(os.path.dirname(**file**), 'test.bin'))

# save the meta information as well, to help us encode/decode later

meta = { 'vocab\_size': vocab\_size, 'itos': itos, 'stoi': stoi, } with open(os.path.join(os.path.dirname(**file**), 'meta.pkl'), 'wb') as f: pickle.dump(meta, f) 68 changes: 68 additions & 0 deletions68  
data/shakespeare\_char/prepare.py Original file line number Diff line number Diff line change @@ -0,0 +1,68 @@ """ Prepare the Shakespeare dataset for character-level language modeling. So instead of encoding with GPT-2 BPE tokens, we just map characters to ints. Will save train.bin, val.bin containing the ids, and meta.pkl containing the encoder and decoder and some other related info. """ import os import pickle import requests import numpy as np

# download the tiny shakespeare dataset

input\_file\_path = os.path.join(os.path.dirname(**file**), 'input.txt') if not os.path.exists(input\_file\_path): data\_url = '[https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt](https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt)' with open(input\_file\_path, 'w') as f: f.write(requests.get(data\_url).text)

with open(input\_file\_path, 'r') as f: data = f.read() print(f"length of dataset in characters: {len(data):,}")

# get all the unique characters that occur in this text

chars = sorted(list(set(data))) vocab\_size = len(chars) print("all the unique characters:", ''.join(chars)) print(f"vocab size: {vocab\_size:,}")

# create a mapping from characters to integers

stoi = { ch:i for i,ch in enumerate(chars) } itos = { i:ch for i,ch in enumerate(chars) } def encode(s): return \[stoi\[c\] for c in s\] # encoder: take a string, output a list of integers def decode(l): return ''.join(\[itos\[i\] for i in l\]) # decoder: take a list of integers, output a string

# create the train and test splits

n = len(data) train\_data = data\[:int(n_0.9)\] val\_data = data\[int(n_0.9):\]

# encode both to integers

train\_ids = encode(train\_data) val\_ids = encode(val\_data) print(f"train has {len(train\_ids):,} tokens") print(f"val has {len(val\_ids):,} tokens")

# export to bin files

train\_ids = np.array(train\_ids, dtype=np.uint16) val\_ids = np.array(val\_ids, dtype=np.uint16) train\_ids.tofile(os.path.join(os.path.dirname(**file**), 'train.bin')) val\_ids.tofile(os.path.join(os.path.dirname(**file**), 'val.bin'))

# save the meta information as well, to help us encode/decode later

meta = { 'vocab\_size': vocab\_size, 'itos': itos, 'stoi': stoi, } with open(os.path.join(os.path.dirname(**file**), 'meta.pkl'), 'wb') as f: pickle.dump(meta, f)

# length of dataset in characters: 1115394

# all the unique characters:

# !$&',-.3:;?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

# vocab size: 65

# train has 1003854 tokens

# val has 111540 tokens

9 changes: 9 additions & 0 deletions9  
data/shakespeare\_char/readme.md Original file line number Diff line number Diff line change @@ -0,0 +1,9 @@

# tiny shakespeare, character-level

Tiny shakespeare, of the good old char-rnn fame :) Treated on character-level.

After running `prepare.py`:

- train.bin has 1,003,854 tokens
- val.bin has 111,540 tokens 75 changes: 75 additions & 0 deletions75data/text8/prepare.py Original file line number Diff line number Diff line change @@ -0,0 +1,75 @@ """ Prepare the text8 dataset for character-level language modeling. So instead of encoding with GPT-2 BPE tokens, we just map characters to ints. Will save train.bin, val.bin containing the ids, and meta.pkl containing the encoder and decoder and some other related info. """ import os import pickle import requests import numpy as np

# download the text8 dataset

input\_file\_path = os.path.join(os.path.dirname(**file**), 'text8') if not os.path.exists(input\_file\_path): data\_url = '[http://mattmahoney.net/dc/text8.zip](http://mattmahoney.net/dc/text8.zip)' r = requests.get(data\_url) with open(os.path.join(os.path.dirname(**file**), 'text8.zip'), 'wb') as f: f.write(r.content)

```
# unzip the text8 dataset
import zipfile
with zipfile.ZipFile(os.path.join(os.path.dirname(__file__), 'text8.zip'), 'r') as zip_ref:
    zip_ref.extractall(os.path.dirname(__file__))
```

with open(input\_file\_path, 'r') as f: data = f.read() print(f"length of dataset in characters: {len(data):,}")

# get all the unique characters that occur in this text

chars = sorted(list(set(data))) vocab\_size = len(chars) print("all the unique characters:", ''.join(chars)) print(f"vocab size: {vocab\_size:,}")

# create a mapping from characters to integers

stoi = { ch:i for i,ch in enumerate(chars) } itos = { i:ch for i,ch in enumerate(chars) } def encode(s): return \[stoi\[c\] for c in s\] # encoder: take a string, output a list of integers def decode(l): return ''.join(\[itos\[i\] for i in l\]) # decoder: take a list of integers, output a string

# create the train, validation, and test splits

n = len(data) num\_test\_chars = 5000000 train\_data = data\[: -2 \* num\_test\_chars\] val\_data = data\[-2 \* num\_test\_chars: -num\_test\_chars\] test\_data = data\[-num\_test\_chars:\]

# encode all splits to integers

train\_ids = encode(train\_data) val\_ids = encode(val\_data) test\_ids = encode(test\_data)

print(f"train has {len(train\_ids):,} tokens") print(f"val has {len(val\_ids):,} tokens") print(f"test has {len(test\_ids):,} tokens")

# export to bin files

train\_ids = np.array(train\_ids, dtype=np.uint16) val\_ids = np.array(val\_ids, dtype=np.uint16) test\_ids = np.array(test\_ids, dtype=np.uint16)

train\_ids.tofile(os.path.join(os.path.dirname(**file**), 'train.bin')) val\_ids.tofile(os.path.join(os.path.dirname(**file**), 'val.bin')) test\_ids.tofile(os.path.join(os.path.dirname(**file**), 'test.bin'))

# save the meta information as well, to help us encode/decode later

meta = { 'vocab\_size': vocab\_size, 'itos': itos, 'stoi': stoi, } with open(os.path.join(os.path.dirname(**file**), 'meta.pkl'), 'wb') as f: pickle.dump(meta, f)

  

@@ -194,8 +194,8 @@ If you use **The AI Scientist** in your research, please cite it as follows:

```
@article{lu2024aiscientist,
  title={The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Chris Lu and Cong Lu and Robert Tjarko Lange and Jakob Foerster and Jeff Clune and David Ha},
  title={The {AI} {S}cientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Lu, Chris and Lu, Cong and Lange, Robert Tjarko and Foerster, Jakob and Clune, Jeff and Ha, David},
  journal={arXiv preprint arXiv:2408.06292},
  year={2024}
}
@@ -212,7 +212,7 @@ Make sure you have completed all the setup and preparation steps before the main
The AI Scientist finishes an idea with a success rate that depends on both the template, the base foundation model, and the complexity of the idea. We advise referring to our main paper. The highest success rates are observed with Claude Sonnet 3.5.

### What is the cost of each idea generated?
Typically less than $15 per paper with Claude Sonnet 3.5.
Typically less than $15 per paper with Claude Sonnet 3.5. We recommend DeepSeek coder for a much more cost-effective approach. A good place to look for new models is the [Aider leaderboard](https://aider.chat/docs/leaderboards/).

### How do I change the base conference format associated with the write-ups?
Change the base `template.tex` files contained within each template.
  4 changes: 2 additions & 2 deletions4  
templates/2d_diffusion/latex/template.tex
Original file line number	Diff line number	Diff line change
@@ -28,8 +28,8 @@
\graphicspath{{../}} % To reference your generated figures, see below.
\begin{filecontents}{references.bib}
@article{lu2024aiscientist,
  title={The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Chris Lu and Cong Lu and Robert Tjarko Lange and Jakob Foerster and Jeff Clune and David Ha},
  title={The {AI} {S}cientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Lu, Chris and Lu, Cong and Lange, Robert Tjarko and Foerster, Jakob and Clune, Jeff and Ha, David},
  journal={arXiv preprint arXiv:2408.06292},
  year={2024}
}
  4 changes: 2 additions & 2 deletions4  
templates/grokking/latex/template.tex
Original file line number	Diff line number	Diff line change
@@ -28,8 +28,8 @@
\graphicspath{{../}} % To reference your generated figures, see below.
\begin{filecontents}{references.bib}
@article{lu2024aiscientist,
  title={The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Chris Lu and Cong Lu and Robert Tjarko Lange and Jakob Foerster and Jeff Clune and David Ha},
  title={The {AI} {S}cientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Lu, Chris and Lu, Cong and Lange, Robert Tjarko and Foerster, Jakob and Clune, Jeff and Ha, David},
  journal={arXiv preprint arXiv:2408.06292},
  year={2024}
}
  4 changes: 2 additions & 2 deletions4  
templates/nanoGPT/latex/template.tex
Original file line number	Diff line number	Diff line change
@@ -28,8 +28,8 @@
\graphicspath{{../}} % To reference your generated figures, see below.
\begin{filecontents}{references.bib}
@article{lu2024aiscientist,
  title={The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Chris Lu and Cong Lu and Robert Tjarko Lange and Jakob Foerster and Jeff Clune and David Ha},
  title={The {AI} {S}cientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Lu, Chris and Lu, Cong and Lange, Robert Tjarko and Foerster, Jakob and Clune, Jeff and Ha, David},
  journal={arXiv preprint arXiv:2408.06292},
  year={2024}
}
  4 changes: 2 additions & 2 deletions4  
templates/nanoGPT_lite/latex/template.tex
Original file line number	Diff line number	Diff line change
@@ -28,8 +28,8 @@
\graphicspath{{../}} % To reference your generated figures, see below.
\begin{filecontents}{references.bib}
@article{lu2024aiscientist,
  title={The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Chris Lu and Cong Lu and Robert Tjarko Lange and Jakob Foerster and Jeff Clune and David Ha},
  title={The {AI} {S}cientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Lu, Chris and Lu, Cong and Lange, Robert Tjarko and Foerster, Jakob and Clune, Jeff and Ha, David},
  journal={arXiv preprint arXiv:2408.06292},
  year={2024}
}
```