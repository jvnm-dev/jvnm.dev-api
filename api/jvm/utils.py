from graphql_relay.node.node import from_global_id


def input_to_dictionary(input):
    """Method to convert Graphene inputs into dictionary"""
    dictionary = {}
    for key in input:
        dictionary[key] = input[key]
    return dictionary
