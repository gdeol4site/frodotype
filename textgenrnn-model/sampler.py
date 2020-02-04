from textgenrnn import textgenrnn

textgen = textgenrnn(weights_path='colaboratory_weights.hdf5',
vocab_path='colaboratory_vocab.json',
config_path='colaboratory_config.json')

#textgen_weights = textgenrnn('colaboratory_weights.hdf5')
textgen.generate(5, temperature=0.67)
