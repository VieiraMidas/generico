import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

class ModalNovoProjeto extends Component {

    constructor() {
        super()
        this.state = {
            nome: "",
            usuario: "",
            descricao: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChande(evento){
        this.setState({nome: evento.target.value })
    }

    render() {
        return (
            <Modal trigger={<Button primary>criar projeto</Button>}>
                <Modal.Header>Cadastrar Projeto</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Input name="nome" value={this.state.nome} onChange={this.handleInputChange} label="Nome do Projeto" />
                        <Form.Input name="autor" value="" label="Autor do Projeto" />
                        <Form.TextArea name="descricao" value="" label="Descrição" />
                        <Button primary type="submit">Criar Projeto</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}
export default ModalNovoProjeto