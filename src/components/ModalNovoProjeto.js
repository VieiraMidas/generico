import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ModalNovoProjeto extends Component {
    constructor() {
        super()
        this.state = {
            nome: '',
            usuario: '',
            descricao: '',
            modalOpen: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleSubmit(e){
        e.preventDefault()
        this.props.adicionarProjeto(this.state)
        this.handleClose()
    }

    render() {
        return (
            <Modal 
                trigger={<Button onClick={this.handleOpen} className="ui primary button">Criar Projeto</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Modal.Header>Cadastrar Projeto</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <form className="ui form" onSubmit={this.handleSubmit}>
                            <div className="field">
                                <label>Nome do Projeto</label>
                                <input
                                    name="nome"
                                    placeholder="Nome do Projeto"
                                    value={this.state.nome}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="field">
                                <label>Autor</label>
                                <input 
                                    name="usuario" 
                                    placeholder="Nome do Autor do Projeto" 
                                    value={this.state.usuario}
                                    onChange={this.handleChange}
                                    />
                            </div>
                            <div className="field">
                                <label>Descrição</label>
                                <textarea 
                                    name="descricao"
                                    value={this.state.descricao}
                                    onChange={this.handleChange}
                                 ></textarea>
                            </div>
                            <button type="submit" className="ui button primary">Cadastrar</button>
                        </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}


export default ModalNovoProjeto